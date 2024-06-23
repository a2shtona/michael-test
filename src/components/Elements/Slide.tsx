"use client";
import React, { useEffect, useState, useReducer, useRef } from "react";

interface ICarouselProps {
  slides: React.ReactElement[];
  cachedSlides?: boolean;
  duration?: number;
  animationDuration?: number;
  animationTimingFunction?: string;
  animationType?: "FADE" | "SLIDE" | "ZOOM";
  animationDelay?: number;
  withNavigation?: boolean;
}

interface ICarouselState {
  active: number;
  nextActive: number;
}

interface IAction {
  type: "NEXT" | "CUSTOM";
  index?: number;
}

export default function Carousel(props: ICarouselProps): React.ReactElement {
  const [state, dispatch] = useReducer(
    (state: ICarouselState, action: IAction) => {
      switch (action.type) {
        case "NEXT":
          return {
            active: state.nextActive,
            nextActive: (state.nextActive + 1) % props.slides.length,
          };
        case "CUSTOM":
          if (typeof action.index !== "undefined") {
            return {
              active: action.index,
              nextActive: (action.index + 1) % props.slides.length,
            };
          }
          return state;
        default:
          throw new Error();
      }
    },
    { active: 0, nextActive: 1 }
  );

  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      dispatch({ type: "NEXT" });
    }, props.duration || 5000); // Default to 5 seconds

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [state.nextActive, props.duration]);

  return (
    <div style={styles.container} className="animated-carousel-container">
      {(props.slides || []).map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.item,
            ...getAnimationStyle({
              index,
              activeIndex: state.active,
              nextActiveIndex: state.nextActive,
              animationType: props.animationType,
              duration: props.animationDuration,
              timingFunction: props.animationTimingFunction,
              animationDelay: props.animationDelay,
            }),
          }}
          className="animated-carousel-item text-start"
        >
          {slide}
        </div>
      ))}
      {props.withNavigation && (
        <div className="animated-carousel-dots flex flex-row gap-1" style={{ zIndex: 1 }}>
          {props.slides.map((_, index) => (
            <button
              key={index}
              className={`animated-carousel-dot ${
                index === state.active ? "active" : ""
              }`.trim()}
              onClick={() => dispatch({ type: "CUSTOM", index })}
              style={
                {
                  '--animation-duration': `${props.duration || 5000}ms`,
                } as React.CSSProperties
              }
            >
              {index === state.active && (
                <svg>
                  <circle cx="10" cy="10" r="8" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  item: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

interface AnimationStyleProps {
  index: number;
  activeIndex: number;
  nextActiveIndex: number;
  animationType?: "FADE" | "SLIDE" | "ZOOM";
  duration?: number;
  timingFunction?: string;
  animationDelay?: number;
}

function getAnimationStyle({
  index,
  activeIndex,
  animationType,
  duration,
  timingFunction,
  animationDelay,
}: AnimationStyleProps): React.CSSProperties {
  const transitionPostfix: string = `${(duration || 700) / 1000}s ${
    timingFunction || "cubic-bezier(0.1, 0.99, 0.1, 0.99)"
  } ${(animationDelay || 100) / 1000}s`;

  let style: React.CSSProperties;

  switch (animationType) {
    case "FADE":
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: `opacity ${transitionPostfix}`,
      };
      break;
    case "SLIDE":
      style = {
        transform: `translateX(${(index - activeIndex) * 100}%)`,
        transition: `transform ${transitionPostfix}`,
      };
      break;
    case "ZOOM":
      style = {
        transform: `scale(${activeIndex === index ? 1 : 2})`,
        opacity: activeIndex === index ? 1 : 0,
        transition: `transform ${transitionPostfix}, opacity ${transitionPostfix}`,
      };
      break;
    default:
      style = {
        opacity: activeIndex === index ? 1 : 0,
        transition: "none",
      };
  }

  return {
    ...style,
    zIndex: activeIndex === index ? 1 : 0,
  };
}
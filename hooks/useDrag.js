import { useCallback, useRef, useEffect } from "react";
import throttle from "lodash.throttle";

export const useDrag = ({
  conatinerRef,
  throttled = false,
  throttleDelay,
  onEnd,
  onMove,
}) => {
  const position = useRef(0);

  const onMoveCallback = useCallback(
    (clientX) => {
      const curentPos = position.current;
      if (curentPos !== null) {
        position.current = clientX;
        onMove(curentPos, clientX);
      }
    },
    [onMove]
  );

  const onDrag = useCallback(
    (event) => {
      const {
        touches: [{ clientX }],
      } = event;

      onMoveCallback(clientX);
    },
    [onMoveCallback]
  );

  const onMouseMove = useCallback(
    (event) => {
      const { clientX } = event;

      // TODO: Call onMouseUp if mouse moved outside container

      onMoveCallback(clientX);
    },
    [onMoveCallback]
  );

  const throttledOnMouseMove = useCallback(
    throttle(onMouseMove, throttleDelay),
    [onMouseMove]
  );

  const throttledOnDrag = useCallback(throttle(onDrag, throttleDelay), [
    onDrag,
  ]);

  const onStartCallback = useCallback((clientX) => {
    position.current = clientX;
  }, []);

  const onDragStart = useCallback((event) => {
    const {
      touches: [{ clientX }],
    } = event;

    onStartCallback(clientX);
  }, []);

  const onMouseDown = useCallback(
    (event) => {
      const { clientX } = event;

      onStartCallback(clientX);

      conatinerRef.current.onmousemove = throttled
        ? throttledOnMouseMove
        : onMouseMove;
    },
    [onMouseMove]
  );

  const onMoveEndCallback = useCallback(() => {
    onEnd();

    position.current = null;
  }, [onEnd]);

  const onDragEnd = useCallback(() => {
    onMoveEndCallback();
  }, [onMoveEndCallback]);

  const onMouseUp = useCallback(() => {
    onMoveEndCallback();
    conatinerRef.current.onmousemove = () => {};
  }, [onMoveEndCallback]);

  useEffect(() => {
    conatinerRef.current.onmousedown = onMouseDown;
  }, [onMouseDown]);

  useEffect(() => {
    conatinerRef.current.onmouseup = onMouseUp;
  }, [onMouseUp]);

  useEffect(() => {
    conatinerRef.current.ontouchstart = onDragStart;
  }, [onDragStart]);

  useEffect(() => {
    conatinerRef.current.ontouchend = onDragEnd;
  }, [onDragEnd]);

  useEffect(() => {
    conatinerRef.current.ontouchmove = throttled ? throttledOnDrag : onDrag;
  }, [onDrag]);
};

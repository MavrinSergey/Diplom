import { eventChangeStatusTaskMouseUp } from "../models/taskUpdate";
let currentDroppable = null;
let placeholder;
let isDraggingStarted = false;
let movingElement;

export function bindDraggableCards() {
    const draggableElements = document.querySelectorAll(".board-item");
    for (const draggableElement of draggableElements) {
        draggableElement.onmousedown = onMouseDown;
        draggableElement.ondragstart = () => {
            return false;
        };
    }
    processEmptySections();
}

const processEmptySections = () => {
    // Create not visible .board-item in empty sections to dnd work with it too
    document
        .querySelectorAll(".board-column-content-wrapper")
        .forEach((section) => {
            if (
                !section.querySelector(
                    ".board-item:not(.emptySectionHiddenLesson)"
                )
            ) {
                if (section.querySelector(".emptySectionHiddenLesson")) {
                    return;
                }
                const emptySectionHiddenLesson = document.createElement("div");
                emptySectionHiddenLesson.classList.add(
                    "board-item",
                    "emptySectionHiddenLesson"
                );
                section.append(emptySectionHiddenLesson);
            } else {
                const emptySectionHiddenLesson = section.querySelector(
                    ".emptySectionHiddenLesson"
                );
                emptySectionHiddenLesson &&
                    section.removeChild(emptySectionHiddenLesson);
            }
        });
};
const createPlaceholder = () => {
    // Create and position placeholder before movingElement
    placeholder = document.createElement("div");
    placeholder.classList.add("placeholder");
    movingElement.parentNode.insertBefore(placeholder, movingElement);
};

const onMouseMove = (event) => {
    if (!isDraggingStarted) {
        isDraggingStarted = true;
        createPlaceholder();
        Object.assign(movingElement.style, {
            position: "absolute",
            zIndex: 1000,
            left: `${initialMovingElementPageXY.x}px`,
            top: `${initialMovingElementPageXY.y}px`,
        });
    }
    moveAt(movingElement, event.pageX, event.pageY);

    const elementBelow = getElementBelow(movingElement, "by-center");
    if (!elementBelow) return;
    let droppableBelow = elementBelow.closest(".board-item");
    if (currentDroppable != droppableBelow) {
        //  currentDroppable=null
        //    if we were not over a droppable element before this event
        //  droppableBelow=null
        //    if we are not over a droppable element now, during this event
        currentDroppable = droppableBelow;
        if (currentDroppable) {
            if (
                !isAbove(movingElement, currentDroppable) ||
                currentDroppable.classList.contains("emptySectionHiddenLesson")
            ) {
                currentDroppable.parentNode.insertBefore(
                    placeholder,
                    currentDroppable
                );
            } else {
                currentDroppable.parentNode.insertBefore(
                    placeholder,
                    currentDroppable.nextElementSibling
                );
            }
        }
    }
};

const setMovingElement = (event) => {
    movingElement = event.target;
};

const onMouseUp = () => {
    if (!isDraggingStarted) {
        document.removeEventListener("mousemove", onMouseMove);
        movingElement.onmouseup = null;
        return;
    }

    placeholder.parentNode.insertBefore(movingElement, placeholder);
    Object.assign(movingElement.style, {
        position: "static",
        left: "auto",
        top: "auto",
        zIndex: "auto",
        transform: "none",
    });
    document.removeEventListener("mousemove", onMouseMove);
    isDraggingStarted = false;
    placeholder && placeholder.parentNode.removeChild(placeholder);
    eventChangeStatusTaskMouseUp(movingElement);
    movingElement.onmouseup = null;
    movingElement = null;

    // Process empty columns without items
    processEmptySections();

    // eventChangeStatusTaskMouseUp();
};

const onMouseDown = (event) => {
    setMovingElement(event);
    shifts.set(event.clientX, event.clientY, movingElement);
    initialMovingElementPageXY.set(movingElement);
    document.addEventListener("mousemove", onMouseMove);
    movingElement.onmouseup = onMouseUp;
    // idDragEl = movingElement.dataset.item;
};

// Initial pageX and pageY of movingElement, at the moment the drag begins
const initialMovingElementPageXY = {
    x: 0,
    y: 0,
    set: (movingElement) => {
        const rect = movingElement.getBoundingClientRect();
        initialMovingElementPageXY.x = rect.x + window.scrollX;
        initialMovingElementPageXY.y = rect.y + window.scrollY;
    },
};

// Shifts allowing drag for any point of movingElement.
// Stores x and y shifts from top left corner of movingElement to the point of drag
const shifts = {
    shiftX: 0,
    shiftY: 0,
    set: (clientX, clientY, movingElement) => {
        shifts.shiftX = clientX - movingElement.getBoundingClientRect().left;
        shifts.shiftY = clientY - movingElement.getBoundingClientRect().top;
    },
};

const moveAt = (element, pageX, pageY) => {
    // Moves element to pageX and pageY coordinates using fast CSS transform method
    element.style.transform = `translate(${
        pageX - initialMovingElementPageXY.x - shifts.shiftX
    }px, ${
        pageY - initialMovingElementPageXY.y - shifts.shiftY
    }px) rotate(-3deg)`;
};

const getElementCoordinates = (node, searchCoordsBy) => {
    // Returns left and top coordinates of node
    const rect = node.getBoundingClientRect();
    return {
        top:
            searchCoordsBy == "by-center"
                ? rect.top + rect.height / 2
                : rect.top + 10,
        left: rect.left + rect.width / 2,
    };
};

const isAbove = (nodeA, nodeB) => {
    // Returns the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
};

const isRight = (nodeA, nodeB) => {
    // Get the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2;
};

const getElementBelow = (movingElement, searchCoordsBy) => {
    // Get element below movingElement now
    const movingElementCenter = getElementCoordinates(
        movingElement,
        searchCoordsBy
    );
    movingElement.hidden = true;
    let elementBelow = document.elementFromPoint(
        movingElementCenter.left,
        movingElementCenter.top
    );
    movingElement.hidden = false;
    return elementBelow;
};

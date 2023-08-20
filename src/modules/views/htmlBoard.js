export function getHeaderSection(title = null) {
    return `<div><h2>${title}</h2></div>
    <div class="btn-group-section">
    <button class="btn" id="task-add">Add task</button>
    <button class="btn" id="task-delete">Delete</button>
    <button class="btn" id="task-update">Update</button>
    </div>`;
}

export function getScrumBoard() {
    return `
    <div class="column col-sm-3">
        <div class="board-column-header">to-work</div>
        <div class="board-column-content-wrapper" id="to-work"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">in-work</div>
        <div class="board-column-content-wrapper"  id="in-work"></div>
    </div>
    
    <div class="column col-sm-3">
        <div class="board-column-header">agreement</div>
        <div class="board-column-content-wrapper" id="agreement"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">completed</div>
        <div class="board-column-content-wrapper" id="completed"></div>
    </div>
  `;
}

export function getItemScrumBoard(
    title,
    dateCreation,
    updateDate,
    leadTime,
    id,
    desc,
    user
) {
    return `
    <div class="board-item__content">
        <div class="board-item__content-header">
            <h4>${title}</h4>
            <input type="checkbox" name="${id}" id="${id}">
        </div>

        <div class="board-item__content-flex">
            <div class="board-item__content-desc">${desc}</div>
            <div class="board-item__content-date">
                <div class="board-item__content-date-row">создание: <span>${dateCreation}</span></div>
                <div class="board-item__content-date-row">обнавлено: <span>${updateDate}</span></div>
                <div class="board-item__content-date-row">завершение: <span>${leadTime}</span></div>
            </div>
        </div>
        <div class="board-item__content-respons">${user}</div>
    </div>
  `;
}

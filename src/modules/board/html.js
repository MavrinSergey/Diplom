export function getScrumBoard() {
    return `
    <div class="column col-sm-3">
        <div class="board-column-header">В работу</div>
        <div class="board-column-content-wrapper" id="col1"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">В работе</div>
        <div class="board-column-content-wrapper"  id="col2"></div>
    </div>
    
    <div class="column col-sm-3">
        <div class="board-column-header">На согласовании</div>
        <div class="board-column-content-wrapper" id="col3"></div>
    </div>

    <div class="column col-sm-3">
        <div class="board-column-header">Завершено</div>
        <div class="board-column-content-wrapper" id="col4"></div>
    </div>
  `;
}

export function getItemScrumBoard(
    title = null,
    dateCreation = null,
    updateDate = null,
    leadTime = null,
    id
) {
    return `
    <div class="board-item__content">
    <div class="board-item__content-header">
        <h4>${title}</h4>
        <input type="checkbox" name="${id}" id="${id}">
    </div>
    <div class="board-item__content-date">
        <div class="board-item__content-date-row">Дата создания: <span>${dateCreation}</span></div>
        <div class="board-item__content-date-row">Дата обнавления: <span>${updateDate}</span></div>
        <div class="board-item__content-date-row">Дата завершения: <span>${leadTime}</span></div>
    </div>
  `;
}

export function getHeaderSection(title = null) {
    return `<div><h2>${title}</h2></div>
    <div class="btn-group-section">
    <button class="btn" id="task-add">Add task</button>
    <button class="btn" id="task-delete">Delete</button>
    <button class="btn" id="task-update">Update</button>
    </div>`;
}

export function getAddTaskForm() {
    return `<div class="wrapper">
    <div class="form">
        <div class="form-wrapper taskAdd" id="taskAdd">
            <form action="">
                <h2 class="taskAdd__title">Add descriptions task</h2>
                <div class="taskAdd__inputBox">
                    <input type="text" name="title" required />
                    <label for="title">Title</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="description" required />
                    <label for="description">Description</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="date" name="lead_time" required />
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="project" required />
                    <label for="project">project</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="status" required />
                    <label for="status">status</label>
                </div>
                <div class="taskAdd__inputBox">
                    <input type="text" name="user" required />
                    <label for="user">user</label>
                </div>
                <button type="submit" class="taskAdd__submit btn">
                    Login
                </button>
            </form>
        </div>
    </div>
</div>`;
}

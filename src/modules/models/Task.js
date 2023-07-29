export class Task {
    constructor(
        id,
        title,
        description,
        date_creation,
        update_date,
        lead_time,
        project_id,
        status_id,
        user_id
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date_creation = date_creation;
        this.update_date = update_date;
        this.lead_time = lead_time;
        this.project_id = project_id;
        this.status_id = status_id;
        this.user_id = user_id;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDate_creation() {
        return this.date_creation;
    }
    getUpdate_date() {
        return this.update_date;
    }
    getLead_time() {
        return this.lead_time;
    }
    getProject_id() {
        return this.project_id;
    }
    getStatus_id() {
        return this.status_id;
    }
    getUser_id() {
        return this.user_id;
    }
}

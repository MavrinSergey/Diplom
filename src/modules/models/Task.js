export class Task {
    constructor(
        id,
        title,
        description,
        date_creation,
        update_date,
        lead_time,
        status,
        user
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date_creation = date_creation;
        this.update_date = update_date;
        this.lead_time = lead_time;
        this.status = status;
        this.user = user;
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
    getStatus_id() {
        return this.status;
    }
    getUser_id() {
        return this.user;
    }
}

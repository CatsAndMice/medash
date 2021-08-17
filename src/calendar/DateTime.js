class DateTime {
    getCurDateTime() {
        return new Date();
    }

    getCurDateMs() {
        return this.getCurDateTime().getTime();
    }

    getCurDateMonth() {
        return this.getCurDateTime().getMonth() + 1;
    }

    setAndReturnDateTime(time) {
        return new Date(time);
    }
}

module.exports = new DateTime();
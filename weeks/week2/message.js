module.exports = function(course, desc) {
    this.course = course;
    this.desc = desc;
    this.detail = ()=>{
        return this.course + " " + this.desc;
    };
};
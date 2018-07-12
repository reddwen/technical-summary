

Function.prototype.bind = function (context,...rest) {
    let self = this;
    let F = function (...params) {
        return self.apply(this instanceof F ? this : context,[...rest,...params]);
    };
    F.prototype = self.prototype;
    return F;
};
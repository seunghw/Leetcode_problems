/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.count = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  return this.count[carType - 1]-- > 0;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// 이 문제는 생각해내는건 어렵지 않은데 막상 코드를 짜려니까 addcar부분에서 살짝 막힘이 있었다. 익숙해지는 수밖에 없는 것 같다.

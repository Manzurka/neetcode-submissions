class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleet = [];
        let carPositionSpeed = position.map((p, i) => [p, speed[i]]); // [ [ 4, 2 ], [ 1, 2 ], [ 0, 1 ], [ 7, 1 ] ]
        carPositionSpeed.sort((a, b) => b[0] - a[0]); // desc
        for(let [positionOfCar, speedOfCar] of carPositionSpeed){
            var time = (target - positionOfCar) / speedOfCar;
            fleet.push(time);
            if(fleet.length >= 2 && (fleet[fleet.length - 1] <= fleet[fleet.length - 2])){
                fleet.pop();
            }
        }
        return fleet.length;
    }
}

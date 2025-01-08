  function twosum(nums,target){
    for (let i = 0; i < nums.length; i++){
        for (let j =i+1;j <nums.length;j++){
            if(nums[i]+nums[j]==target){
                return[i,j];
            }

        
        }


    }
    return null;

    

  }
let nums=[1,3,9,11,15];
let target=4;
let result=twosum(nums,target);
 console.log(result);



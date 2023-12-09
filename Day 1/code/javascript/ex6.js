//REST Parameters = Variable args 
//only one rest parameter for a func
//rest parameters will be last arg
function total(...nums)
{
    //console.log(nums.length+"\n")
    let sum =2
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
}
return sum
    }
    
    

console.log(total(1,2,3,4,5,6))
console.log(total("1","2","3","4"))
console.log(total("hi","how r you","go to hell","good bye"))






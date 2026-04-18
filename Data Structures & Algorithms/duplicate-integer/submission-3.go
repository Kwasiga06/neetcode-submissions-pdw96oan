func hasDuplicate(nums []int) bool {

    n := len(nums)

    sort.Ints(nums)
    for i:=0; i < n - 1; i++ {
        if nums[i] == nums[i + 1]{
            return true
        }
    }
    return false
    
}

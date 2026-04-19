class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        thisdict = {}

        for i, num in enumerate(nums):
            x = target - num
            if x in thisdict:
                return [thisdict[x], i]
            thisdict[num] = i
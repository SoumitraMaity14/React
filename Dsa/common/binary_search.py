def binary_search(nums, target):
  left=0
  right=len(nums)-1
  while left<=right:
    mid=(right+left)//2
    if nums[mid]==target:
      return mid
    elif target<=nums[mid]:
      right=mid-1
    else:
      left=mid+1
  return left

nums = [1, 2, 3, 4]

def solution(arr) {
    subsets = []
    temp = []

    for i in range(len(arr)):
        temp = [arr[i]]
        subsets.append(temp)

            for j in range(i+1, len(arr)):
                temp.append(arr[j])
                subsets.append(temp)
    }


  print(subsets)
  return subsets
}

solution(nums)

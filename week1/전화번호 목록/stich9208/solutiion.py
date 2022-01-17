def solution(phoneBook):
    answer = True
    map = {}

    # 인자로 받은 list를 dictionary 구조로 정의
    for phoneNum in phoneBook:
        map[phoneNum] = 1

    for phoneNum in phoneBook:
        temp = ""

        # phooneNum의 문자열을 순환하며 한글자씩 더해준다
        for num in phoneNum:
            temp += num
            
            #temp가 phoneNum이 아닌 동시에 map dictionary 내에 존재할경우 바로 false 반환
            if temp in map and temp != phoneNum:
                answer = False
                return answer

    # 한 번호가 다른 번호의 접두사가 아닌 경우
    return answer
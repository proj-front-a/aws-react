import axios from "axios"

// REST APIを実行し、余力情報を取得
export const UseQueryCapacity = async (category) => {
    const { data } = await axios.get("https://ctunz7tuy2.execute-api.ap-northeast-1.amazonaws.com/demo?category=" + category)
    return data
}
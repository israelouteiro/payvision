import styled from "styled-components/native";

export const Safe = styled.SafeAreaView.attrs({
})` 
    flex:1;
    background-color: #ffffff;
`

export const Scroll = styled.ScrollView.attrs({
})` 
    flex:1;
    background-color: #fff;
`

export const Container = styled.View.attrs({
})`
    flex:1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    padding: 24px;
`

export const ImageLogo = styled.ImageBackground.attrs({
    source: require('@assets/icon.jpg')
})`
    width: 120px;
    height: 120px;
    margin-bottom: 40px;
`

export const Button = styled.TouchableOpacity.attrs({
})` 
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    border-radius: 4px;
    margin-top: 20px;
    border-width: .5px;
    border-color: #262626;
`

export const ButtonText = styled.Text.attrs({
})`
    font-size: 30px;
    font-weight: bold;
    color: #262626;
`

export const InputLabel = styled.Text.attrs({
})`
    font-size: 20px;
    font-weight: bold;
    color: #262626;
    width: 100%;
    margin: 0 0 5px;
    padding: 0 3px;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#262626'
})`
    height: 50px; 
    border-width: .5px;
    border-color: #262626;
    color: #262626;
    margin-bottom: 20px;
    width: 100%;
    font-size: 18px; 
    padding: 0 20px;
`

export const Subtitle = styled.Text.attrs({ 
})`  
    width: 100%;
    color: #262626;
    font-size: 18px; 
    font-weight: bold;
    padding: 0 20px;
    text-align: center;
`

export const Title = styled.Text.attrs({ 
})`  
    width: 100%;
    color: #262626;
    font-size: 18px; 
    padding: 0 20px; 
    text-align: center;
    margin-bottom: 28px;
`
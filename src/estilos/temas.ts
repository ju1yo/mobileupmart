import {extendTheme} from 'native-base'

export const design = extendTheme({
    colors: {
        gray: {
            300:'#ACABAB',
            500: '#787676',
            700: '#464242',
            900: '#555151'

        },
        orange: {
            300: '#F9C57F',
            500: '#A66911',
            700: '#F69900',
            900: '#FE8A00',
        },
        white: '#fff'
    },
    fontSizes: {
        xs: 14,
        sm: 16,
        md: 24,
        lg: 36,
        xl: 40,
    },
})
import Typography from "typography"

const typography = new Typography({ 
    baseFontSize: "14px",
    overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
        h2: {
          ...adjustFontSizeTo('14px')
        },
    })
})

export default typography
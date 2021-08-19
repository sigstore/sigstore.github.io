import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#6349FF',
    secondaryColor: '#C29G94',
  },
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
})
export default theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      marginBottom: 20,
      //backgroundColor: theme.palette.background.default,
    },
    body: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
})
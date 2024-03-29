import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const DashboardPageStyle = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  giveawayPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto'
  },
  giveawayPaperImage: {
    width: '550px',
    height: '400px',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto'
  },
  fixedHeight: {
    height: 'auto'
  },
  actionButtonsGroup: {
    marginTop: '15px'
  },
  actionButtons: {
    minHeight: 'calc( 120px / 2)'
  },
  customHeightPaper: {
    minHeight: '250px',
    flexDirection: 'row'
  },
  giveawayImage: {
    width: '100%'
  },
  giveawayButtons: {
    paddingTop: '30px'
  },
  inputGiveaway: {
    paddingBottom: '20px'
  },
  newUserForm: {
    width: '100%',
    height: '500px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch'
  }
}))

export default DashboardPageStyle

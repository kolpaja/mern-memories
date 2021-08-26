import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    paddingTop: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    mainApp: {
      flexDirection: 'column-reverse',
    }
  }

}));
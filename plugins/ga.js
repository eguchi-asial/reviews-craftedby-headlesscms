import firebase from './firebaseanalytics'

export default ({
  app
}) => {
  if(process.env.NODE_ENV === 'development') return
  console.log('analitycs start')
  firebase.analytics();
}

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{ path: '/'});
  this.route('login');
  this.route('signup');
  this.route('searchcandidate');
  this.route('searchjob');

  this.route('editprofile');
  this.route('dashboard');
  this.route('addjob');
  this.route('viewjobs');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dota-viewer');
  this.route('weather-app');
  this.route('library-app');
});

export default Router;

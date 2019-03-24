'use strict';

define("csgames2019-psc/tests/helpers/ember-simple-auth", ["exports", "ember-simple-auth/authenticators/test"], function (_exports, _test) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.authenticateSession = authenticateSession;
  _exports.currentSession = currentSession;
  _exports.invalidateSession = invalidateSession;
  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);

    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const {
      __container__: container
    } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');

    if (session.get('isAuthenticated')) {
      session.invalidate();
    }

    return app.testHelpers.wait();
  }
});
define("csgames2019-psc/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });
  QUnit.test('authorizers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/addjob.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/addjob.js should pass ESLint\n\n8:7 - Unexpected console statement. (no-console)\n9:12 - \'description\' is assigned a value but never used. (no-unused-vars)\n9:24 - \'salary\' is assigned a value but never used. (no-unused-vars)\n9:31 - \'work_universe\' is assigned a value but never used. (no-unused-vars)\n9:45 - \'required_skills\' is assigned a value but never used. (no-unused-vars)\n9:61 - \'education\' is assigned a value but never used. (no-unused-vars)\n25:9 - Unexpected console statement. (no-console)\n26:25 - \'error\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n13:9 - Unexpected console statement. (no-console)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/addjob.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/addjob.js should pass ESLint\n\n');
  });
  QUnit.test('routes/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint\n\n');
  });
  QUnit.test('routes/editprofile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/editprofile.js should pass ESLint\n\n');
  });
  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });
  QUnit.test('routes/searchcandidate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/searchcandidate.js should pass ESLint\n\n');
  });
  QUnit.test('routes/searchjob.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/searchjob.js should pass ESLint\n\n');
  });
  QUnit.test('routes/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass ESLint\n\n');
  });
  QUnit.test('routes/viewjobs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/viewjobs.js should pass ESLint\n\n');
  });
});
define("csgames2019-psc/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('csgames2019-psc/templates/addjob.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'csgames2019-psc/templates/addjob.hbs should pass TemplateLint.\n\ncsgames2019-psc/templates/addjob.hbs\n  1:0  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('csgames2019-psc/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'csgames2019-psc/templates/application.hbs should pass TemplateLint.\n\ncsgames2019-psc/templates/application.hbs\n  10:8  error  Incorrect indentation for `{{#link-to}}` beginning at L10:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  20:8  error  Incorrect indentation for `{{#link-to}}` beginning at L20:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  28:22  error  Incorrect indentation for `link-to` beginning at L20:C8. Expected `{{/link-to}}` ending at L28:C22 to be at an indentation of 8 but was found at 10.  block-indentation\n  21:12  error  Incorrect indentation for `<button>` beginning at L21:C12. Expected `<button>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('csgames2019-psc/templates/dashboard.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/dashboard.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/editprofile.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/editprofile.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/home.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/login.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/searchcandidate.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/searchcandidate.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/searchjob.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/searchjob.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/signup.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/signup.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('csgames2019-psc/templates/viewjobs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'csgames2019-psc/templates/viewjobs.hbs should pass TemplateLint.\n\n');
  });
});
define("csgames2019-psc/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/addjob-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/addjob-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/addjob-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/addjob-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/editprofile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/editprofile-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/searchcandidate-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/searchcandidate-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/searchjob-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/searchjob-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/viewjobs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/viewjobs-test.js should pass ESLint\n\n');
  });
});
define("csgames2019-psc/tests/test-helper", ["csgames2019-psc/app", "csgames2019-psc/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("csgames2019-psc/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("csgames2019-psc/tests/unit/controllers/addjob-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | addjob', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:addjob');
      assert.ok(controller);
    });
  });
});
define("csgames2019-psc/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("csgames2019-psc/tests/unit/controllers/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/addjob-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | addjob', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:addjob');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/dashboard-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dashboard', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dashboard');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/editprofile-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | editprofile', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:editprofile');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/searchcandidate-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | searchcandidate', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:searchcandidate');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/searchjob-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | searchjob', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:searchjob');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/signup-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | signup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:signup');
      assert.ok(route);
    });
  });
});
define("csgames2019-psc/tests/unit/routes/viewjobs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | viewjobs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:viewjobs');
      assert.ok(route);
    });
  });
});
define('csgames2019-psc/config/environment', [], function() {
  var prefix = 'csgames2019-psc';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('csgames2019-psc/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

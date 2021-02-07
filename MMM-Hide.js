/*global Module, MM, Log*/

Module.register('MMM-Hide', {
    defaults: {
        modules: [],
    },

    // 모듈이 성공적으로 로딩된 후에 실행됨
    start: function () {
        Log.log(`${this.name} is starting!`);
    },

    notificationReceived: function (notification, payload, sender) {
        var self = this;

        switch (notification) {
            case 'ALL_MODULES_STARTED':
                MM.getModules().enumerate(function (m) {
                    if (self.config.modules.indexOf(m.name) >= 0) {
                        setTimeout(() => {
                            Log.log(`Hiding ${m.name} module`);
                            m.hide(0);
                        }, 2000);
                    }
                });
                break;
        }
    },
});

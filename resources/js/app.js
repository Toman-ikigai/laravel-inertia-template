import * as Sentry from "@sentry/vue";

import { route, ZiggyVue } from 'ziggy-js';

import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/vue3';

import { userCan } from "@js/utilities/permissions.js";

import {
    Bars3Icon,
    XMarkIcon,
    SparklesIcon,
    CheckCircleIcon,
    XCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/vue/24/outline';

import AppLayout from "@js/Layouts/App.vue";

import Notice from "@js/Components/Notice.vue";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        let page = pages[`./Pages/${name}.vue`];

        page.default.layout = page.default.layout || AppLayout;

        return page;
    },

    setup({ el, App, props, plugin }) {
        const VueApp = createApp({ render: () => h(App, props) });

        Sentry.init({
            app: VueApp,
            dsn: import.meta.env.VITE_SENTRY_DSN_PUBLIC,
            environment: import.meta.env.VITE_APP_ENV,
        });

        VueApp.use(plugin)
            .use(ZiggyVue);

        VueApp.mixin({ methods: { userCan } });

        VueApp.component('Bars3Icon', Bars3Icon)
            .component('XMarkIcon', XMarkIcon)
            .component('SparklesIcon', SparklesIcon)
            .component('CheckCircleIcon', CheckCircleIcon)
            .component('XCircleIcon', XCircleIcon)
            .component('ExclamationCircleIcon', ExclamationCircleIcon);

        VueApp.component('Head', Head)
            .component('Link', Link)
            .component('Notice', Notice);

        VueApp.mount(el);
    },

    title: title => title ? `${title} | Template` : 'Template',

    progress: {
        color: '#000',
    },
});

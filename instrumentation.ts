// @ts-ignore 
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        projectName: "turn-demo",
        serviceName: "turn-demo",
        accountKey: "tsxvgwovbtqqojghcmkvfwgscjzwdreopzed",
        target: "https://qsvae.middleware.io:443",
    });
}
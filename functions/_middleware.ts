import mailChannelsPlugin, { Submission } from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
    personalizations: [
        {
            to: [{
                name: 'Jan Švábík',
                email: 'jansvabik@jansvabik.cz'
            }],
        },
    ],
    from: {
        name: 'Kontaktní formulář',
        email: 'jansvabik@jansvabik.cz',
    },
    respondWith: (submission: Submission) => {
        return new Response(
            `${JSON.stringify(submission)}`
        );
    },
});
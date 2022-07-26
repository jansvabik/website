import mailChannelsPlugin from '@cloudflare/pages-plugin-mailchannels';

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
    respondWith: () => {
        return new Response(null, {
            status: 302,
            headers: { Location: '/dekuji/' },
        })
    },
});
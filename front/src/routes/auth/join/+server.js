export async function POST({ request, cookies }) {
    console.log('들어옴?!?!?!');

    console.log(cookies);
    cookies.set('visited', 'true', { path: '/' });


    const body = await request.json();
    return new Response(`POST received: ${JSON.stringify(body)}`, { status: 200 });
}

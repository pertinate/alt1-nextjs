export async function GET() {
    var data = {
        message: 'result from get'
    }

    return Response.json({
        "appName": "Alt1 React Typescript Template",
        "description": "Alt1 React starter kit",
        "appUrl": "/custom_app",
        "configUrl": "/custom_app/appconfig.json",
        "iconUrl": "icon.png",
        "defaultWidth": 250,
        "defaultHeight": 250,
        "minWidth": 250,
        "minHeight": 250,
        "maxWidth": 500,
        "maxHeight": 500,
        "requestHandlers": [],
        "activators": [],
        "permissions": "overlay, pixel, gamestate"
    })
}
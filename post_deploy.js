const branch = activity.parameters.environment;

fetch(
    "https://api.github.com/repos/jonw-cogapp/jons-example-project/dispatches",
    {
        method: "POST",
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: `Bearer ${variables.github_token}`,
        },
        body: JSON.stringify({
            event_type: "post_deploy_complete",
            client_payload: {
                branch,
            },
        }),
    }
);

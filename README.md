# Extra Life Express API

A quick implementation of the [extra-life-api](https://github.com/ammuench/extra-life-api) as an full API middleware

Easy to setup, just clone the repo, run `npm install`, and start with `node app.js`

It runs on port 8080 by default, and can be run on local machine or a VPS as an API out of the box

## Routes

*Includes the following endpoints:*

### **/getUser/:id**

Gets user info, and returns following JSON:
```json
{
    "displayName": "Alex Muench",
    "totalRaisedAmount": 0,
    "fundraisingGoal": 1000,
    "participantID": 275385,
    "createdOn": "2017-10-04T15:20:54-0400",
    "avatarImageURL": "http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg",
    "teamID": 36631,
    "isTeamCaptain": true,
    "donateURL": "https://www.extra-life.org/index.cfm?fuseaction=donate.participant&participantID=275385",
    "teamName": "Echo League",
    "teamURL": "http://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=36631"
}
```

### **/getUserDonations/:id**

Gets list of a users donations, returns array of donations, most recent first
```json
[
    {
        "message": "Great job raising money!",
        "createdOn": "2016-09-18T10:50:21-0400",
        "donorName": "Alex Muench",
        "avatarImageURL": "//static.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",
        "donationAmount": 100
    },
    {
        "message": "Great job raising money!",
        "createdOn": "2016-09-18T10:50:21-0400",
        "donorName": "Alex Muench",
        "avatarImageURL": "//static.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",
        "donationAmount": 100
    },
    {
        "message": "Great job raising money!",
        "createdOn": "2016-09-18T10:50:21-0400",
        "donorName": "Alex Muench",
        "avatarImageURL": "//static.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",
        "donationAmount": 100
    }
]
```

### **/getTeam/:id**

Gets team info, roster, and overall fundraising goals
```json
{
    "totalRaisedAmount": 0,
    "fundraisingGoal": 3000,
    "createdOn": "2017-10-04T15:20:54-0400",
    "avatarImageURL": "http://assets.donordrive.com/extralife/images/$event534$/avatar_team_36631.jpg",
    "teamID": 36631,
    "name": "Echo League",
    "teamURL": "http://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=36631",
    "members": [
        {
            "name": "Alex Muench",
            "isTeamCaptain": true,
            "raised": 0,
            "URL": "https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=275385",
            "pID": 275385,
            "image": "http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg"
        },
        {
            "name": "Kody Keating",
            "isTeamCaptain": false,
            "raised": 0,
            "URL": "https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=282999",
            "pID": 282999,
            "image": "http://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif"
        }
    ]
}
```

## Thanks & Support

Thanks to everyone who's helped contribute to [extra-life-api](https://github.com/ammuench/extra-life-api), everyone who has starred or left comments for me.

Thanks to the wonderful people at Extra Life who run this great event and community

If you found this useful, I'd be ecstatic if you wanted to [donate over at my page](https://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=275385)

If you'd like to see this being used "in the wild", feel free to check out my current page here: http://alexmuen.ch/extralife

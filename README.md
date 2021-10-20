# Hacknight Backend
Backend built for Hacktoberfest Hacknight 2k21

## API Documentations

### Fetch Detials of all the participants
### ```/search/individuals/all```

### Fetch Detials of all the teams
### ```/search/teams/all```

### Fetch Detials of one participant
### ```/search/individual/:registreationID```

### Fetch Detials of one team
### ```/search/team/:registreationID```

### Create Individual Registreation
### ```/create/individual```
Body of the API Request
```
{
    "name": "swaaz",
    "email": "swaaz@sosc.org.in",
    "college": "St. Aloysius College",
    "phone": "6969696969",
    "year": 4,
    "discordUsername": "swaaz#6969",
    "githubUsername": "swaaz"
}

```

### Create Team Registreation
### ```/create/team```
Body of the API Request
```
{
    "teamName" : "swaaz",
    "member1" : "6170612242e69e4e4a957d4f",
    "member2" : "1170612242e69e4e4a957e4h",
    "member3" : "2170612242ed9e4e4a957d4s",
    "member4" : "317s612242e69e4e4a957d4c"
}

```

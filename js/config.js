boomerang.factory('Config', function () {
    return {
        /* modify these */
        'name'          : 'GDG Open Lima', // GDG Name
        'id'            : '116021360471772072148', // GDG Google+ Page id
        'google_api'    : 'AIzaSyBYSWMuNWjFlYQL7J6XdolDwFq6bDgb6hc', // Google Cloud API
        'pwa_id'        : '6116927159592951329', // picasa web album id, must belong to Google+ id above
        'domain'        : 'gdgopenlima-python.appspot.com', // custom domain or [your app].appspot.com
        'youtube'       : '', // YouTube handle
        'twitter'       : 'gdgopenlima', // Twitter handle
        'meetup'        : 'gdgopenlima', // MeetUp handle
        'facebook'      : 'gdgopenlima', // Facebook handle
        'github'        : '', // GitHub handle
        'cover' : {
            title : 'Let\'s code!',
            subtitle : 'Contribuyendo al desarrollo del ecosistema desarrollador',
            url : '/images/google-io-15.png',
            button : {
                text : 'Unete',
                url : 'http://www.meetup.com/gdgopenlima'
            }
        },
        'organizers': {
            0 : {
              id : 1,
              
            },
        },
        'sponsors' : {
            0 : {
                id : 1,
                name : 'Google Developers',
                url : 'https://developers.google.com/',
                image : {
                    url : '../images/Google-Developers.png'
                }
            }/*,
            1 : {
                id : 2,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            2 : {
                id : 3,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            },
            3 : {
                id : 4,
                name : '',
                url : 'https://',
                image : {
                    url : '../images/'
                }
            }*/
        }
    };
});
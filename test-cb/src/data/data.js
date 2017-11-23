const data = {
  'main': [
    {
      'id': 0,
      'name': 'Baroque',
      'url': '/baroque',
      'items': [
        {
          'id': '1',
          'name': 'French',
          'url': '/baroque/french',
          'items': [
            {
              'id': 55,
              'name': 'Charpentier',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 59,
              'name': 'Lully',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 56,
              'name': 'Grigny',
              'url': '{parent_url}/{id}'
            }
          ]
        },
        {
          'id': '1',
          'name': 'German',
          'url': '/baroque/german',
          'items': [
            {
              'id': 12,
              'name': 'Bach',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 98,
              'name': 'Telemann',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 77,
              'name': 'Fux',
              'url': '{parent_url}/{id}'
            }
          ]
        },
        {
          'id': '1',
          'name': 'Italian',
          'url': '/baroque/italian',
          'items': [
            {
              'id': 25,
              'name': 'Vivaldi',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 35,
              'name': 'Corelli',
              'url': '{parent_url}/{id}'
            },
            {
              'id': 36,
              'name': 'Scarlatti',
              'url': '{parent_url}/{id}'
            }
          ]
        }
      ]
    },
    {
      'id': 0,
      'name': 'Classical',
      'url': '/classical',
      'items': [
        {
          'id': 60,
          'name': 'Stamitz',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 61,
          'name': 'Mozart',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 62,
          'name': 'Haydn',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 63,
          'name': 'Gossec',
          'url': '{parent_url}/{id}'
        }
      ]
    },
    {
      'id': 0,
      'name': 'Romantic',
      'url': '/romantic',
      'items': [
        {
          'id': 64,
          'name': 'Schumann',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 65,
          'name': 'Weber',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 66,
          'name': 'Beethoven',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 67,
          'name': 'Bruckner',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 68,
          'name': 'Mahler',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 69,
          'name': 'Brahms',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 70,
          'name': 'Verdi',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 71,
          'name': 'Elgar',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 72,
          'name': 'Tchaikovsky',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 73,
          'name': 'Strauss',
          'url': '{parent_url}/{id}'
        },
        {
          'id': 74,
          'name': 'Franck',
          'url': '{parent_url}/{id}'
        }
      ]
    }
  ]
}

export default data

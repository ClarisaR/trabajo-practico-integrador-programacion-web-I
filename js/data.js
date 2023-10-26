const artistas = [
    {
        id: 1,
        nombre: 'Dua Lipa',
        fotografia: 'artista1'
    },
    {
        id: 2,
        nombre: 'Harry Styles',
        fotografia: 'artista2'
    },
    {
        id: 3,
        nombre: 'Maria Becerra',
        fotografia: 'artista3'
    },
    {
        id: 4,
        nombre: 'Nicki Nicole',
        fotografia: 'artista4'
    },
    {
        id: 5,
        nombre: 'Doja Cat',
        fotografia: 'artista5'
    },
    {
        id: 6,
        nombre: 'Miley Cyrus',
        fotografia: 'artista6'
    },
    {
        id: 7,
        nombre: 'Ysy A',
        fotografia: 'artista7'
    },
    {
        id: 8,
        nombre: 'Billie Eillish',
        fotografia: 'artista8'
    },
    {
        id: 9,
        nombre: 'The Beatles',
        fotografia: 'artista9'
    },
    {
        id: 10,
        nombre: 'Feid',
        fotografia: 'artista10'
    },
    {
        id: 11,
        nombre: 'Taylor Swift',
        fotografia: 'artista11'
    },
    {
        id: 12,
        nombre: 'Emilia Mernes',
        fotografia: 'artista12'
    },
    {
        id: 13,
        nombre: 'Adele',
        fotografia: 'artista13'
    },
    {
        id: 14,
        nombre: 'Bad Bunny',
        fotografia: 'artista14'
    },
    {
        id: 15,
        nombre: 'Pink Floyd',
        fotografia: 'artista15'
    },
    {
        id: 16,
        nombre: 'The Weeknd',
        fotografia: 'artista16'
    }
]



const albumes = [
    {
        id: 1,
        nombre: 'Future Nostalgia',
        portada: 'album1',
        id_artista: 1
    },
    {
        id: 2,
        nombre: 'Fine Line',
        portada: 'album2',
        id_artista: 2
    },
    {
        id: 3,
        nombre: 'La Nena de Argentina',
        portada: 'album3',
        id_artista: 3
    },
    {
        id: 4,
        nombre: 'Alma',
        portada: 'album4',
        id_artista: 4
    },
    {
        id: 5,
        nombre: 'Hot Pink',
        portada: 'album5',
        id_artista: 5
    },
    {
        id: 6,
        nombre: 'Plastic Hearts',
        portada: 'album6',
        id_artista: 6
    },
    {
        id: 7,
        nombre: 'Ysysmo',
        portada: 'album7',
        id_artista: 7
    },
    {
        id: 8,
        nombre: 'Happier Than Ever',
        portada: 'album8',
        id_artista: 8
    },
    {
        id: 9,
        nombre: 'Abbey Road',
        portada: 'album9',
        id_artista: 9
    },
     {
        id: 10,
        nombre: 'Sixdo',
        portada: 'album10',
        id_artista: 10
    },
     {
        id: 11,
        nombre: '1989',
        portada: 'album11',
        id_artista: 11
    },
   {
        id: 12,
        nombre: 'Tu crees en mi?',
        portada: 'album12',
        id_artista: 12
    },
    {
        id: 13,
        nombre: 'Adele 21',
        portada: 'album13',
        id_artista: 13
    },
     {
        id: 14,
        nombre: 'Un verano sin ti',
        portada: 'album14',
        id_artista: 14
    },
     {
        id: 15,
        nombre: 'The Dark Side of the Moon',
        portada: 'album15',
        id_artista: 15
    },
     {
        id: 16,
        nombre: 'Starboy',
        portada: 'album16',
        id_artista: 16
    }
]

const canciones = [
    {
        nombre: 'Future Nostalgia',
        duracion: '3:04',
        portada: 'album1',
        id_album: 1
    },
     {
        nombre: 'Do not start now',
        duracion: '3:03',
        portada: 'album1',
        id_album: 1
    },
     {
        nombre: 'Cool',
        duracion: '3:29',
        portada: 'album1',
        id_album: 1
    },
     {
        nombre: 'Break my heart',
        duracion: '3:29',
        portada: 'album1',
        id_album: 1
    },
     {
        nombre: 'Golden',
        duracion: '3:29',
        portada: 'album2',
        id_album: 2
    },
     {
        nombre: 'Cherry',
        duracion: '4:19',
        portada: 'album2',
        id_album: 2
    },
     {
        nombre: 'She',
        duracion: '3:00',
        portada: 'album2',
        id_album: 2
    },
     {
        nombre: 'Adore You',
        duracion: '3:20',
        portada: 'album2',
        id_album: 2
    },
     {
        nombre: 'Pidelo',
        duracion: '3:29',
        portada: 'album3',
        id_album: 3
    },
     {
        nombre: 'Adios',
        duracion: '4:19',
        portada: 'album3',
        id_album: 3
    },
     {
        nombre: 'La nena de Argentina',
        duracion: '3:00',
        portada: 'album3',
        id_album: 3
    },
     {
        nombre: 'Inspiradora',
        duracion: '3:20',
        portada: 'album3',
        id_album: 3
    },
     {
        nombre: 'Dispara',
        duracion: '3:29',
        portada: 'album4',
        id_album: 4
    },
     {
        nombre: '8 AM',
        duracion: '4:19',
        portada: 'album4',
        id_album: 4
    },
     {
        nombre: 'Tienes mi Alma',
        duracion: '3:00',
        portada: 'album4',
        id_album: 4
    },
     {
        nombre: 'No voy a llorar',
        duracion: '3:20',
        portada: 'album4',
        id_album: 4
    },
     {
        nombre: 'Adiction',
        duracion: '3:29',
        portada: 'album5',
        id_album: 5
    },
     {
        nombre: 'Streets',
        duracion: '4:19',
        portada: 'album5',
        id_album: 5
    },
     {
        nombre: 'Rules',
        duracion: '3:00',
        portada: 'album5',
        id_album: 5
    },
     {
        nombre: 'Say So',
        duracion: '3:20',
        portada: 'album5',
        id_album: 5
    },
     {
        nombre: 'Prisoner',
        duracion: '3:29',
        portada: 'album6',
        id_album: 6
    },
     {
        nombre: 'Bad Karma',
        duracion: '4:19',
        portada: 'album6',
        id_album: 6
    },
     {
        nombre: 'Hate Me',
        duracion: '3:00',
        portada: 'album6',
        id_album: 6
    },
     {
        nombre: 'Golden G String',
        duracion: '3:20',
        portada: 'album6',
        id_album: 6
    },
     {
        nombre: 'Ser el trap',
        duracion: '3:00',
        portada: 'album7',
        id_album: 7
    },
     {
        nombre: 'Todo Pago',
        duracion: '3:50',
        portada: 'album7',
        id_album: 7
    },
     {
        nombre: 'Un piso mas',
        duracion: '3:56',
        portada: 'album7',
        id_album: 7
    },
     {
        nombre: 'Relojes Reventados',
        duracion: '4:00',
        portada: 'album7',
        id_album: 7
    },
     {
        nombre: 'Therefore I Am',
        duracion: '3:59',
        portada: 'album8',
        id_album: 8
    },
     {
        nombre: 'Everybody Dies',
        duracion: '5:00',
        portada: 'album8',
        id_album: 8
    },
     {
        nombre: 'My Future',
        duracion: '3:45',
        portada: 'album8',
        id_album: 8
    },
     {
        nombre: 'Happier Than Ever',
        duracion: '3:56',
        portada: 'album8',
        id_album: 8
    },
     {
        nombre: 'Something',
        duracion: '4:07',
        portada: 'album9',
        id_album: 9
    },
     {
        nombre: 'Here Comes the Sun',
        duracion: '3:09',
        portada: 'album9',
        id_album: 9
    },
     {
        nombre: 'Because',
        duracion: '2:30',
        portada: 'album9',
        id_album: 9
    },
     {
        nombre: 'Oh! Darling',
        duracion: '3:05',
        portada: 'album9',
        id_album: 9
    },
     {
        nombre: 'Le pido a DIOS',
        duracion: '3:40',
        portada: 'album10',
        id_album: 10
    },
     {
        nombre: 'Malibu',
        duracion: '4:00',
        portada: 'album10',
        id_album: 10
    },
     {
        nombre: 'Hookia',
        duracion: '4:50',
        portada: 'album10',
        id_album: 10
    },
     {
        nombre: 'La pasamos CXBRXN',
        duracion: '3:05',
        portada: 'album10',
        id_album: 10
    },
     {
        nombre: 'This Love',
        duracion: '3:50',
        portada: 'album11',
        id_album: 11
    },
     {
        nombre: 'Clean',
        duracion: '4:00',
        portada: 'album11',
        id_album: 11
    },
     {
        nombre: 'Style',
        duracion: '3:20',
        portada: 'album11',
        id_album: 11
    },
     {
        nombre: 'New Romantic',
        duracion: '3:04',
        portada: 'album11',
        id_album: 11
    },
     {
        nombre: 'Introxicao',
        duracion: '2:48',
        portada: 'album12',
        id_album: 12
    },
     {
        nombre: 'Rapido, Lento',
        duracion: '3:05',
        portada: 'album12',
        id_album: 12
    },
     {
        nombre: 'Como si no importara',
        duracion: '3:20',
        portada: 'album12',
        id_album: 12
    },
     {
        nombre: 'Cielo en la mente',
        duracion: '2:55',
        portada: 'album12',
        id_album: 12
    },
     {
        nombre: 'Someone Like You',
        duracion: '5:00',
        portada: 'album13',
        id_album: 13
    },
     {
        nombre: 'Easy on My',
        duracion: '2:50',
        portada: 'album13',
        id_album: 13
    },
     {
        nombre: 'Love in The Dark',
        duracion: '3:40',
        portada: 'album13',
        id_album: 13
    },
     {
        nombre: 'When We Were Young',
        duracion: '5:00',
        portada: 'album13',
        id_album: 13
    },
     {
        nombre: 'Party',
        duracion: '2:55',
        portada: 'album14',
        id_album: 14
    },
     {
        nombre: 'Andrea',
        duracion: '3:44',
        portada: 'album14',
        id_album: 14
    },
     {
        nombre: 'Callaita',
        duracion: '3:55',
        portada: 'album14',
        id_album: 14
    },
     {
        nombre: 'Ojitos Lindos',
        duracion: '2:55',
        portada: 'album14',
        id_album: 14
    },
     {
        nombre: 'Time',
        duracion: '7:00',
        portada: 'album15',
        id_album: 15
    },
     {
        nombre: 'Eclipse',
        duracion: '4:00',
        portada: 'album15',
        id_album: 15
    },
     {
        nombre: 'Money',
        duracion: '6:44',
        portada: 'album15',
        id_album: 15
    },
     {
        nombre: 'Any Color You Like',
        duracion: '3:26',
        portada: 'album15',
        id_album: 15
    },
     {
        nombre: 'All I Know',
        duracion: '4:00',
        portada: 'album16',
        id_album: 16
    },
     {
        nombre: 'Starboy',
        duracion: '4:00',
        portada: 'album16',
        id_album: 16
    },
     {
        nombre: 'Party Monster',
        duracion: '5:55',
        portada: 'album16',
        id_album: 16
    },
     {
        nombre: 'Reminder',
        duracion: '3:54',
        portada: 'album16',
        id_album: 16
    }
]
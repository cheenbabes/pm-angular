'use strict'

angular.module('myApp.book', [])

    .controller('BookFormController', ['$scope', function ($scope) {

        $scope.showSubmit = false;

        $scope.books = [];

        $scope.addBook = function(){
            $scope.showSubmit = true;
            $scope.books.push({
                title: '',
                language: '',
                numberOfBooks:''
            })
        }

        $scope.removeBook = function(array, index){
            array.splice(index, 1);
        }


        // Constants
        $scope.countries = [
            {
            "value": "Afghanistan",
            "label": "Afghanistan"
          }, {
            "value": "Albania",
            "label": "Albania"
          }, {
            "value": "Algeria",
            "label": "Algeria"
          }, {
            "value": "Andorra",
            "label": "Andorra"
          }, {
            "value": "Angola",
            "label": "Angola"
          }, {
            "value": "Anguilla",
            "label": "Anguilla"
          }, {
            "value": "Antigua &amp; Barbuda",
            "label": "Antigua &amp; Barbuda"
          }, {
            "value": "Argentina",
            "label": "Argentina"
          }, {
            "value": "Armenia",
            "label": "Armenia"
          }, {
            "value": "Aruba",
            "label": "Aruba"
          }, {
            "value": "Australia",
            "label": "Australia"
          }, {
            "value": "Austria",
            "label": "Austria"
          }, {
            "value": "Azerbaijan",
            "label": "Azerbaijan"
          }, {
            "value": "Bahamas",
            "label": "Bahamas"
          }, {
            "value": "Bahrain",
            "label": "Bahrain"
          }, {
            "value": "Bangladesh",
            "label": "Bangladesh"
          }, {
            "value": "Barbados",
            "label": "Barbados"
          }, {
            "value": "Belarus",
            "label": "Belarus"
          }, {
            "value": "Belgium",
            "label": "Belgium"
          }, {
            "value": "Belize",
            "label": "Belize"
          }, {
            "value": "Benin",
            "label": "Benin"
          }, {
            "value": "Bermuda",
            "label": "Bermuda"
          }, {
            "value": "Bhutan",
            "label": "Bhutan"
          }, {
            "value": "Bolivia",
            "label": "Bolivia"
          }, {
            "value": "Bosnia &amp; Herzegovina",
            "label": "Bosnia &amp; Herzegovina"
          }, {
            "value": "Botswana",
            "label": "Botswana"
          }, {
            "value": "Brazil",
            "label": "Brazil"
          }, {
            "value": "British Virgin Islands",
            "label": "British Virgin Islands"
          }, {
            "value": "Brunei",
            "label": "Brunei"
          }, {
            "value": "Bulgaria",
            "label": "Bulgaria"
          }, {
            "value": "Burkina Faso",
            "label": "Burkina Faso"
          }, {
            "value": "Burundi",
            "label": "Burundi"
          }, {
            "value": "Cambodia",
            "label": "Cambodia"
          }, {
            "value": "Cameroon",
            "label": "Cameroon"
          }, {
            "value": "Cape Verde",
            "label": "Cape Verde"
          }, {
            "value": "Cayman Islands",
            "label": "Cayman Islands"
          }, {
            "value": "Chad",
            "label": "Chad"
          }, {
            "value": "Chile",
            "label": "Chile"
          }, {
            "value": "China",
            "label": "China"
          }, {
            "value": "Colombia",
            "label": "Colombia"
          }, {
            "value": "Congo",
            "label": "Congo"
          }, {
            "value": "Cook Islands",
            "label": "Cook Islands"
          }, {
            "value": "Costa Rica",
            "label": "Costa Rica"
          }, {
            "value": "Cote D Ivoire",
            "label": "Cote D Ivoire"
          }, {
            "value": "Croatia",
            "label": "Croatia"
          }, {
            "value": "Cruise Ship",
            "label": "Cruise Ship"
          }, {
            "value": "Cuba",
            "label": "Cuba"
          }, {
            "value": "Cyprus",
            "label": "Cyprus"
          }, {
            "value": "Czech Republic",
            "label": "Czech Republic"
          }, {
            "value": "Denmark",
            "label": "Denmark"
          }, {
            "value": "Djibouti",
            "label": "Djibouti"
          }, {
            "value": "Dominica",
            "label": "Dominica"
          }, {
            "value": "Dominican Republic",
            "label": "Dominican Republic"
          }, {
            "value": "Ecuador",
            "label": "Ecuador"
          }, {
            "value": "Egypt",
            "label": "Egypt"
          }, {
            "value": "El Salvador",
            "label": "El Salvador"
          }, {
            "value": "Equatorial Guinea",
            "label": "Equatorial Guinea"
          }, {
            "value": "Estonia",
            "label": "Estonia"
          }, {
            "value": "Ethiopia",
            "label": "Ethiopia"
          }, {
            "value": "Falkland Islands",
            "label": "Falkland Islands"
          }, {
            "value": "Faroe Islands",
            "label": "Faroe Islands"
          }, {
            "value": "Fiji",
            "label": "Fiji"
          }, {
            "value": "Finland",
            "label": "Finland"
          }, {
            "value": "France",
            "label": "France"
          }, {
            "value": "French Polynesia",
            "label": "French Polynesia"
          }, {
            "value": "French West Indies",
            "label": "French West Indies"
          }, {
            "value": "Gabon",
            "label": "Gabon"
          }, {
            "value": "Gambia",
            "label": "Gambia"
          }, {
            "value": "Georgia",
            "label": "Georgia"
          }, {
            "value": "Germany",
            "label": "Germany"
          }, {
            "value": "Ghana",
            "label": "Ghana"
          }, {
            "value": "Gibraltar",
            "label": "Gibraltar"
          }, {
            "value": "Greece",
            "label": "Greece"
          }, {
            "value": "Greenland",
            "label": "Greenland"
          }, {
            "value": "Grenada",
            "label": "Grenada"
          }, {
            "value": "Guam",
            "label": "Guam"
          }, {
            "value": "Guatemala",
            "label": "Guatemala"
          }, {
            "value": "Guernsey",
            "label": "Guernsey"
          }, {
            "value": "Guinea",
            "label": "Guinea"
          }, {
            "value": "Guinea Bissau",
            "label": "Guinea Bissau"
          }, {
            "value": "Guyana",
            "label": "Guyana"
          }, {
            "value": "Haiti",
            "label": "Haiti"
          }, {
            "value": "Honduras",
            "label": "Honduras"
          }, {
            "value": "Hong Kong",
            "label": "Hong Kong"
          }, {
            "value": "Hungary",
            "label": "Hungary"
          }, {
            "value": "Iceland",
            "label": "Iceland"
          }, {
            "value": "India",
            "label": "India"
          }, {
            "value": "Indonesia",
            "label": "Indonesia"
          }, {
            "value": "Iran",
            "label": "Iran"
          }, {
            "value": "Iraq",
            "label": "Iraq"
          }, {
            "value": "Ireland",
            "label": "Ireland"
          }, {
            "value": "Isle of Man",
            "label": "Isle of Man"
          }, {
            "value": "Israel",
            "label": "Israel"
          }, {
            "value": "Italy",
            "label": "Italy"
          }, {
            "value": "Jamaica",
            "label": "Jamaica"
          }, {
            "value": "Japan",
            "label": "Japan"
          }, {
            "value": "Jersey",
            "label": "Jersey"
          }, {
            "value": "Jordan",
            "label": "Jordan"
          }, {
            "value": "Kazakhstan",
            "label": "Kazakhstan"
          }, {
            "value": "Kenya",
            "label": "Kenya"
          }, {
            "value": "Kuwait",
            "label": "Kuwait"
          }, {
            "value": "Kyrgyz Republic",
            "label": "Kyrgyz Republic"
          }, {
            "value": "Laos",
            "label": "Laos"
          }, {
            "value": "Latvia",
            "label": "Latvia"
          }, {
            "value": "Lebanon",
            "label": "Lebanon"
          }, {
            "value": "Lesotho",
            "label": "Lesotho"
          }, {
            "value": "Liberia",
            "label": "Liberia"
          }, {
            "value": "Libya",
            "label": "Libya"
          }, {
            "value": "Liechtenstein",
            "label": "Liechtenstein"
          }, {
            "value": "Lithuania",
            "label": "Lithuania"
          }, {
            "value": "Luxembourg",
            "label": "Luxembourg"
          }, {
            "value": "Macau",
            "label": "Macau"
          }, {
            "value": "Macedonia",
            "label": "Macedonia"
          }, {
            "value": "Madagascar",
            "label": "Madagascar"
          }, {
            "value": "Malawi",
            "label": "Malawi"
          }, {
            "value": "Malaysia",
            "label": "Malaysia"
          }, {
            "value": "Maldives",
            "label": "Maldives"
          }, {
            "value": "Mali",
            "label": "Mali"
          }, {
            "value": "Malta",
            "label": "Malta"
          }, {
            "value": "Mauritania",
            "label": "Mauritania"
          }, {
            "value": "Mauritius",
            "label": "Mauritius"
          }, {
            "value": "Mexico",
            "label": "Mexico"
          }, {
            "value": "Moldova",
            "label": "Moldova"
          }, {
            "value": "Monaco",
            "label": "Monaco"
          }, {
            "value": "Mongolia",
            "label": "Mongolia"
          }, {
            "value": "Montenegro",
            "label": "Montenegro"
          }, {
            "value": "Montserrat",
            "label": "Montserrat"
          }, {
            "value": "Morocco",
            "label": "Morocco"
          }, {
            "value": "Mozambique",
            "label": "Mozambique"
          }, {
            "value": "Namibia",
            "label": "Namibia"
          }, {
            "value": "Nepal",
            "label": "Nepal"
          }, {
            "value": "Netherlands",
            "label": "Netherlands"
          }, {
            "value": "Netherlands Antilles",
            "label": "Netherlands Antilles"
          }, {
            "value": "New Caledonia",
            "label": "New Caledonia"
          }, {
            "value": "New Zealand",
            "label": "New Zealand"
          }, {
            "value": "Nicaragua",
            "label": "Nicaragua"
          }, {
            "value": "Niger",
            "label": "Niger"
          }, {
            "value": "Nigeria",
            "label": "Nigeria"
          }, {
            "value": "Norway",
            "label": "Norway"
          }, {
            "value": "Oman",
            "label": "Oman"
          }, {
            "value": "Pakistan",
            "label": "Pakistan"
          }, {
            "value": "Palestine",
            "label": "Palestine"
          }, {
            "value": "Panama",
            "label": "Panama"
          }, {
            "value": "Papua New Guinea",
            "label": "Papua New Guinea"
          }, {
            "value": "Paraguay",
            "label": "Paraguay"
          }, {
            "value": "Peru",
            "label": "Peru"
          }, {
            "value": "Philippines",
            "label": "Philippines"
          }, {
            "value": "Poland",
            "label": "Poland"
          }, {
            "value": "Portugal",
            "label": "Portugal"
          }, {
            "value": "Puerto Rico",
            "label": "Puerto Rico"
          }, {
            "value": "Qatar",
            "label": "Qatar"
          }, {
            "value": "Reunion",
            "label": "Reunion"
          }, {
            "value": "Romania",
            "label": "Romania"
          }, {
            "value": "Russia",
            "label": "Russia"
          }, {
            "value": "Rwanda",
            "label": "Rwanda"
          }, {
            "value": "Saint Pierre &amp; Miquelon",
            "label": "Saint Pierre &amp; Miquelon"
          }, {
            "value": "Samoa",
            "label": "Samoa"
          }, {
            "value": "San Marino",
            "label": "San Marino"
          }, {
            "value": "Satellite",
            "label": "Satellite"
          }, {
            "value": "Saudi Arabia",
            "label": "Saudi Arabia"
          }, {
            "value": "Senegal",
            "label": "Senegal"
          }, {
            "value": "Serbia",
            "label": "Serbia"
          }, {
            "value": "Seychelles",
            "label": "Seychelles"
          }, {
            "value": "Sierra Leone",
            "label": "Sierra Leone"
          }, {
            "value": "Singapore",
            "label": "Singapore"
          }, {
            "value": "Slovakia",
            "label": "Slovakia"
          }, {
            "value": "Slovenia",
            "label": "Slovenia"
          }, {
            "value": "South Africa",
            "label": "South Africa"
          }, {
            "value": "South Korea",
            "label": "South Korea"
          }, {
            "value": "Spain",
            "label": "Spain"
          }, {
            "value": "Sri Lanka",
            "label": "Sri Lanka"
          }, {
            "value": "St Kitts &amp; Nevis",
            "label": "St Kitts &amp; Nevis"
          }, {
            "value": "St Lucia",
            "label": "St Lucia"
          }, {
            "value": "St Vincent",
            "label": "St Vincent"
          }, {
            "value": "St. Lucia",
            "label": "St. Lucia"
          }, {
            "value": "Sudan",
            "label": "Sudan"
          }, {
            "value": "Suriname",
            "label": "Suriname"
          }, {
            "value": "Swaziland",
            "label": "Swaziland"
          }, {
            "value": "Sweden",
            "label": "Sweden"
          }, {
            "value": "Switzerland",
            "label": "Switzerland"
          }, {
            "value": "Syria",
            "label": "Syria"
          }, {
            "value": "Taiwan",
            "label": "Taiwan"
          }, {
            "value": "Tajikistan",
            "label": "Tajikistan"
          }, {
            "value": "Tanzania",
            "label": "Tanzania"
          }, {
            "value": "Thailand",
            "label": "Thailand"
          }, {
            "value": "Timor L'Este",
            "label": "Timor L'Este"
          }, {
            "value": "Togo",
            "label": "Togo"
          }, {
            "value": "Tonga",
            "label": "Tonga"
          }, {
            "value": "Trinidad &amp; Tobago",
            "label": "Trinidad &amp; Tobago"
          }, {
            "value": "Tunisia",
            "label": "Tunisia"
          }, {
            "value": "Turkey",
            "label": "Turkey"
          }, {
            "value": "Turkmenistan",
            "label": "Turkmenistan"
          }, {
            "value": "Turks &amp; Caicos",
            "label": "Turks &amp; Caicos"
          }, {
            "value": "Uganda",
            "label": "Uganda"
          }, {
            "value": "Ukraine",
            "label": "Ukraine"
          }, {
            "value": "United Arab Emirates",
            "label": "United Arab Emirates"
          }, {
            "value": "United Kingdom",
            "label": "United Kingdom"
          }, {
            "value": "Uruguay",
            "label": "Uruguay"
          }, {
            "value": "Uzbekistan",
            "label": "Uzbekistan"
          }, {
            "value": "Venezuela",
            "label": "Venezuela"
          }, {
            "value": "Vietnam",
            "label": "Vietnam"
          }, {
            "value": "Virgin Islands (US)",
            "label": "Virgin Islands (US)"
          }, {
            "value": "Yemen",
            "label": "Yemen"
          }, {
            "value": "Zambia",
            "label": "Zambia"
          }, {
            "value": "Zimbabwe",
            "label": "Zimbabwe"
          }]

        $scope.bookTitles = [
            {
                value: 'Beyond Birth and Death',
                label: 'Beyond Birth and Death'
            },
            {
                value: 'Bhagavad-gita 1972 Edition',
                label: 'Bhagavad-gita 1972 Edition'
            },
            {
                value: 'Bhakti Yoga - The Art of Eternal Love',
                label: 'Bhakti Yoga - The Art of Eternal Love'
            },
            {
                value: 'Chant and Be Happy',
                label: 'Chant and Be Happy'
            },
            {
                value: 'Coming Back',
                label: 'Coming Back'
            },
            {
                value: 'Dharma - The Way of Transcendence',
                label: 'Dharma - The Way of Transcendence'
            },
            {
                value: 'Easy Journey to Other Planets',
                label: 'Easy Journey to Other Planets'
            },
            {
                value: 'Hiding in Unnatural Happiness',
                label: 'Hiding in Unnatural Happiness'
            },
            {
                value: 'Higher Taste',
                label: 'Higher Taste'
            },
            {
                value: 'Introduction to Bhagavad-gita',
                label: 'Introduction to Bhagavad-gita'
            },
            {
                value: 'Journey of Self Discovery (Hard)',
                label: 'Journey of Self Discovery (Hard)'
            },
            {
                value: 'Krsna Book Hard One Volume',
                label: 'Krsna Book Hard One Volume'
            },
            {
                value: 'Light of the Bhagavata',
                label: 'Light of the Bhagavata'
            },
            {
                value: 'Matchless Gifts',
                label: 'Matchless Gifts'
            },
            {
                value: 'Nectar of Instruction',
                label: 'Nectar of Instruction'
            },
            {
                value: 'Perfect Questions Perfect Answers (Soft)',
                label: 'Perfect Questions Perfect Answers (Soft)'
            },
            {
                value: 'Raja Vidya',
                label: 'Raja Vidya'
            },
            {
                value: 'Science of Self-Realization (Hard)',
                label: 'Science of Self-Realization (Hard)'
            },
            {
                value: 'Science of Self-Realization (Soft)',
                label: 'Science of Self-Realization (Soft)'
            },
            {
                value: 'Spiritual Yoga',
                label: 'Spiritual Yoga'
            },
            {
                value: 'Sri Isopanisad',
                label: 'Sri Isopanisad'
            },
            {
                value: 'Srimad-Bhagavatam 1.1',
                label: 'Srimad-Bhagavatam 1.1'
            },
            {
                value: 'Teachings of Lord Caitanya (Flexibind)',
                label: 'Teachings of Lord Caitanya (Flexibind)'
            },
            {
                value: 'The Perfection of Yoga',
                label: 'The Perfection of Yoga'
            },
            {
                value: 'Topmost Yoga (Soft)',
                label: 'Topmost Yoga (Soft)'
            },
            {
                value: 'Vanity Karma: Ecclesiastes, the Bhagavad-gita, and the meaning of life',
                label: 'Vanity Karma: Ecclesiastes, the Bhagavad-gita, and the meaning of life'
            }
        ]

        $scope.distributeOptions = [
            {
                value: 'Base Temple Distribution',
                label: 'Base Temple Distribution'
            },
            {
                value: 'Booth Multicultural Festival',
                label: 'Booth Multicultural Festival'
            },
            {
                value: 'College Campus',
                label: 'College Campus'
            },
            {
                value: 'Door To Door',
                label: 'Door to Door'
            },
            {
                value: 'Factory placement',
                label: 'Factory placement'
            },
            {
                value: 'Hospital placement',
                label: 'Hospital placement'
            },
            {
                value: 'Individual',
                label: 'Individual'
            },
            {
                value: 'Motel Gita placement',
                label: 'Motel Gita placement'
            },
            {
                value: 'Music Festival',
                label: 'Music Festival'
            },
            {
                value: 'Other Placements',
                label: 'Other Placements'
            },
            {
                value: 'Smart Box',
                label: 'Smart Box'
            },
            {
                value: 'Street Sankirtan',
                label: 'Street Sankirtan'
            },
            {
                value: 'Traveling Sankirtan',
                label: 'Traveling Sankirtan'
            },
            {
                value: 'Yoga Studios placement',
                label: 'Yoga Studios placement'
            }
        ]

        $scope.languageOptions = [ 
        { value: 'Afrikaans', label: 'Afrikaans' },
        { value: 'Albanian', label: 'Albanian' },
        { value: 'Amharic', label: 'Amharic' },
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Armenian', label: 'Armenian' },
        { value: 'Assamese', label: 'Assamese' },
        { value: 'Azerbaijani', label: 'Azerbaijani' },
        { value: 'Bashkir', label: 'Bashkir' },
        { value: 'Belarusian', label: 'Belarisian' },
        { value: 'Bengali', label: 'Bengali' },
        { value: 'Bosnian', label: 'Bosnian' },
        { value: 'Bulgarian', label: 'Bulgarian' },
        { value: 'Burmese', label: 'Burmese' },
        { value: 'Chhattisgarhi', label: 'Chhattisgarhi' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Chuvash', label: 'Chuvash' },
        { value: 'Croatian', label: 'Croatian' },
        { value: 'Czech', label: 'Czech' },
        { value: 'Danish', label: 'Danish' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'English', label: 'English' },
        { value: 'Esperanto', label: 'Esperanto' },
        { value: 'Estonian', label: 'Estonian' },
        { value: 'Farsi', label: 'Farsi' },
        { value: 'Finnish', label: 'Finnish' },
        { value: 'French', label: 'French' },
        { value: 'Georgian', label: 'Georgian' },
        { value: 'German', label: 'German' },
        { value: 'Glish', label: 'Glish' },
        { value: 'Greek', label: 'Greek' },
        { value: 'Gujarati', label: 'Gujarati' },
        { value: 'Hebrew', label: 'Hebrew' },
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Hungarian', label: 'Hungarian' },
        { value: 'Icelandic', label: 'Icelandic' },
        { value: 'Indonesian', label: 'Indonesian' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Kannada', label: 'Kannada' },
        { value: 'Karakalpak', label: 'Karalpak' },
        { value: 'Kazakh', label: 'Kazakh' },
        { value: 'Khmer', label: 'Khmer' },
        { value: 'Kirgiz', label: 'Kirgiz' },
        { value: 'Kiswahili', label: 'Kiswahili' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Lao', label: 'Lao' },
        { value: 'Latvian', label: 'Latvian' },
        { value: 'Lithuanian', label: 'Lithuanian' },
        { value: 'Macedonian', label: 'Macedonian' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'Mandarin', label: 'Mandarin' },
        { value: 'Manipuri', label: 'Manipuri' },
        { value: 'Marathi', label: 'Marathi' },
        { value: 'Mauritius Creole', label: 'Mauritius Creole' },
        { value: 'Mongolian', label: 'Mongolian' },
        { value: 'Nepali', label: 'Nepali' },
        { value: 'Newari', label: 'Newari' },
        { value: 'Norwegian', label: 'Norwegian' },
        { value: 'Oriya', label: 'Oriya' },
        { value: 'Pidgin', label: 'Pidgin' },
        { value: 'Polish', label: 'Polish' },
        { value: 'Portuguese', label: 'Portugese' },
        { value: 'Punjabi', label: 'Punjabi' },
        { value: 'Romanian', label: 'Romanian' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Serbian', label: 'Serbian' },
        { value: 'Serbo-Croatian', label: 'Serbo-Croatian' },
        { value: 'Sindhi', label: 'Sindhi' },
        { value: 'Slovak', label: 'Slovak' },
        { value: 'Slovene', label: 'Slovene' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Swahili', label: 'Swahili' },
        { value: 'Swedish', label: 'Swedish' },
        { value: 'Tagalog', label: 'Tagalog' },
        { value: 'Tajik', label: 'Tajik' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Tatar', label: 'Tatar' },
        { value: 'Telugu', label: 'Telugu' },
        { value: 'Thai', label: 'Thai' },
        { value: 'Tibetan', label: 'Tibetan' },
        { value: 'Tswana', label: 'Tswana' },
        { value: 'Turkish', label: 'Turkish' },
        { value: 'Turkmen', label: 'Turkmen' },
        { value: 'Udmurt', label: 'Udmurt' },
        { value: 'Ukranian', label: 'Ukranian' },
        { value: 'Urdu', label: 'Urdu' },
        { value: 'Uzbekh', label: 'Uzbekh' },
        { value: 'Vietnamese', label: 'Vietnamese' },
        { value: 'Zhosa', label: 'Zhosa' },
        { value: 'Zulu', label: 'Zulu' } ];

    }]);
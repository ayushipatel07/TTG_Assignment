import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
{
    "id": 1,
    "Name": "Ted james",
    "address": "1234 Anywhere St.",
    "phonenumber": "+1 3456789011",
    "policynumber": "7001002001",
    "city": " Phoenix "
},
{
    "id": 2,
    "Name": "Michelle Thompson",
    "address": "345 Cedar Point Ave.",
    "phonenumber": "+1 3456990455",
    "policynumber": "7001002022",
    "city": "Encinitas "
    },

    {
        "id": 3,
        "Name": "Zed Bishop",
        "address": "1822 Long Bay Dr.",
        "phonenumber": "+1 3456960609",
        "policynumber": "7001002023",
        "city": " Seattle "

        },

        {
            "id": 4,
            "Name": "Tina Adams",
            "address": "79455 Pinetop Way",
            "phonenumber": "+1 3456970701",
            "policynumber": "7001002054",
            "city": "Chandler"
            }
        ]
        return {users};
    }
}
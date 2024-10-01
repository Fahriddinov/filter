async function card() {
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.users.length; i++) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    document.body.appendChild(card);

    const name = document.createElement('h2');
    name.textContent = `${data.users[i].firstName} ${data.users[i].lastName}`;
    card.appendChild(name);

    const age = document.createElement('p');
    age.textContent = `Age: ${data.users[i].age}`;
    card.appendChild(age);

    const gender = document.createElement('p');
    gender.textContent = `Gender: ${data.users[i].gender}`;
    card.appendChild(gender);

    const email = document.createElement('p');
    email.textContent = `Email: ${data.users[i].email}`;
    card.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${data.users[i].phone}`;
    card.appendChild(phone);

    const username = document.createElement('p');
    username.textContent = `Username: ${data.users[i].username}`;
    card.appendChild(username);

    const birthDate = document.createElement('p');
    birthDate.textContent = `Birth Date: ${data.users[i].birthDate}`;
    card.appendChild(birthDate);

    const image = document.createElement('img');
    image.src = data.users[i].image;
    card.appendChild(image);

    const bloodGroup = document.createElement('p');
    bloodGroup.textContent = `Blood Group: ${data.users[i].bloodGroup}`;
    card.appendChild(bloodGroup);

    const height = document.createElement('p');
    height.textContent = `Height: ${data.users[i].height} cm`;
    card.appendChild(height);

    const weight = document.createElement('p');
    weight.textContent = `Weight: ${data.users[i].weight} kg`;
    card.appendChild(weight);

    const eyeColor = document.createElement('p');
    eyeColor.textContent = `Eye Color: ${data.users[i].eyeColor}`;
    card.appendChild(eyeColor);

    const hairColor = document.createElement('p');
    hairColor.textContent = `Hair Color: ${data.users[i].hair.color}`;
    card.appendChild(hairColor);

    const hairType = document.createElement('p');
    hairType.textContent = `Hair Type: ${data.users[i].hair.type}`;
    card.appendChild(hairType);

    const ip = document.createElement('p');
    ip.textContent = `IP: ${data.users[i].ip}`;
    card.appendChild(ip);

    const macAddress = document.createElement('p');
    macAddress.textContent = `MAC Address: ${data.users[i].macAddress}`;
    card.appendChild(macAddress);

    const university = document.createElement('p');
    university.textContent = `University: ${data.users[i].university}`;
    card.appendChild(university);

    const bankCardExpire = document.createElement('p');
    bankCardExpire.textContent = `Bank Card Expire: ${data.users[i].bank.cardExpire}`;
    card.appendChild(bankCardExpire);

    const bankCardNumber = document.createElement('p');
    bankCardNumber.textContent = `Bank Card Number: ${data.users[i].bank.cardNumber}`;
    card.appendChild(bankCardNumber);

    const bankCardType = document.createElement('p');
    bankCardType.textContent = `Bank Card Type: ${data.users[i].bank.cardType}`;
    card.appendChild(bankCardType);

    const bankCurrency = document.createElement('p');
    bankCurrency.textContent = `Bank Currency: ${data.users[i].bank.currency}`;
    card.appendChild(bankCurrency);

    const bankIban = document.createElement('p');
    bankIban.textContent = `Bank IBAN: ${data.users[i].bank.iban}`;
    card.appendChild(bankIban);

    const companyDepartment = document.createElement('p');
    companyDepartment.textContent = `Company Department: ${data.users[i].company.department}`;
    card.appendChild(companyDepartment);

    const companyName = document.createElement('p');
    companyName.textContent = `Company Name: ${data.users[i].company.name}`;
    card.appendChild(companyName);

    const companyTitle = document.createElement('p');
    companyTitle.textContent = `Company Title: ${data.users[i].company.title}`;
    card.appendChild(companyTitle);

    const ein = document.createElement('p');
    ein.textContent = `EIN: ${data.users[i].ein}`;
    card.appendChild(ein);

    const ssn = document.createElement('p');
    ssn.textContent = `SSN: ${data.users[i].ssn}`;
    card.appendChild(ssn);

    const userAgent = document.createElement('p');
    userAgent.textContent = `User Agent: ${data.users[i].userAgent}`;
    card.appendChild(userAgent);

    const cryptoCoin = document.createElement('p');
    cryptoCoin.textContent = `Crypto Coin: ${data.users[i].crypto.coin}`;
    card.appendChild(cryptoCoin);

    const cryptoWallet = document.createElement('p');
    cryptoWallet.textContent = `Crypto Wallet: ${data.users[i].crypto.wallet}`;
    card.appendChild(cryptoWallet);

    const cryptoNetwork = document.createElement('p');
    cryptoNetwork.textContent = `Crypto Network: ${data.users[i].crypto.network}`;
    card.appendChild(cryptoNetwork);

    const role = document.createElement('p');
    role.textContent = `Role: ${data.users[i].role}`;
    card.appendChild(role);

    card.style.display = 'block';
  }
}

card();
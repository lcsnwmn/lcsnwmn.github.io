
function buildContactInfoItem(contactInfoItem) {
    let container = $('<div/>');

    let icon = $('<i></i>', {
        "class": contactInfoItem['icon-classes']
    });
    container.append(icon);

    if (contactInfoItem['link']) {
        let link = $(`<a href="${contactInfoItem['link']}">${contactInfoItem['display']}</a>`);
        container.append(link);
    }
    else {
        let span = $(`<span>${contactInfoItem['display']}</span>`);
        container.append(span);
    }

    return container;
}

function buildWorkHistoryItem(workHistoryItem) {
    let container = $('<div/>');

    let header = $('<div class="job-header" />');
    container.append(header);
    
    let headerLine1 = $('<div class="header-line-1"/>');
    header.append(headerLine1);

    let company = $(`<div class="company hyphen">${workHistoryItem['company']}</div>`);
    headerLine1.append(company);

    let title = $(`<div class="job-title">${workHistoryItem['title']}</div>`);
    headerLine1.append(title);

    let headerLine2 = $('<div class="header-line-2"/>');
    header.append(headerLine2);

    let location = $(`<div class="company-location hyphen">${workHistoryItem['location']}</div>`);
    headerLine2.append(location);

    let dates = $(`<div class="employment-dates">${workHistoryItem['start']} - ${workHistoryItem['end']}</div>`);
    headerLine2.append(dates);

    let duties = $('<ul class="duties"></ul>');
    $.each(workHistoryItem['duties'], function (index, item) {
        let duty = $(`<li>${item}</li>`);
        duties.append(duty);
    });
    container.append(duties);

    return container;
}

function buildEducationItem(educationItemInfo) {
    let container = $('<div/>');

    let header = $('<div class="school-header"/>')
    let schoolName = $(`<div class="school-name">${educationItemInfo['school']}</div>`);
    header.append(schoolName);

    let location = $(`<div class="school-location">${educationItemInfo['location']}</div>`);
    header.append(location);
    container.append(header);

    let attributes = $(`<ul class="no-bullet"></ul>`);
    let graduationYear = $(`<li class="graduation-year">Class of ${educationItemInfo['graduation-year']}</li>`)
    attributes.append(graduationYear);

    let degree = $(`<li class="degree">${educationItemInfo['degree']}</li>`)
    attributes.append(degree);

    let major = $(`<li class="major">${educationItemInfo['major']}</li>`)
    attributes.append(major);
    
    let concentration = $(`<li class="concentration">${educationItemInfo['concentration']} concentration</li>`)
    attributes.append(concentration);

    let minor = $(`<li class="minor">${educationItemInfo['minor']} minor</li>`)
    attributes.append(minor);

    container.append(attributes);

    return container;
}

function buildSection(sectionName, sectionInfo) {
    console.log(`Building Section: ${sectionName}`);
    console.dir(sectionInfo);

    let sectionContainer = $(`#${sectionName}`);
    const headerTag = Object.keys(sectionInfo)[0];
    let header = $(`<${headerTag}>${sectionInfo[headerTag]}</${headerTag}>`);
    sectionContainer.append(header);

    $.each(sectionInfo['items'], function (index, item) {
        sectionContainer.append(buildItem(sectionName, item));
    })
}

function buildItem(sectionName, itemInfo) {
    switch (sectionName) {
        case 'contact-info':
            return buildContactInfoItem(itemInfo);
        case 'summary':
            return $(`<p>${itemInfo}</p>`)
        case 'work-history':
            return buildWorkHistoryItem(itemInfo);
        case 'skills':
            return $(`<div class="skill-item">${itemInfo}</div>`);
        case 'education':
            return buildEducationItem(itemInfo);
    }
}

$(document).ready(function () {
    $.getJSON('resume.json', function (data) {
        
        $.each(data, function(key, value) {
            buildSection(key, value)
        });
    });
});
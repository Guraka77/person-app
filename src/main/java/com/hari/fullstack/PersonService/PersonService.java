package com.hari.fullstack.PersonService;



import com.hari.fullstack.model.Person;
import com.hari.fullstack.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    public Person getPersonById(Long id) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        return optionalPerson.orElseThrow(() -> new RuntimeException("Person not found with id " + id));
    }

    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    public Person updatePerson(Long id, Person personDetails) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        if (optionalPerson.isPresent()) {
            Person person = optionalPerson.get();
            person.setFirstName(personDetails.getFirstName());
            person.setLastName(personDetails.getLastName());
            person.setDob(personDetails.getDob());
            person.setEmail(personDetails.getEmail());
            person.setPhone(personDetails.getPhone());
            return personRepository.save(person);
        } else {
            throw new RuntimeException("Person not found with id " + id);
        }
    }

    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}

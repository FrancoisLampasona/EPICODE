package it.francois.progetto_settimanale.events;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import it.francois.progetto_settimanale.auth.AppUser;

@Entity
@Data
@NoArgsConstructor
public class Event {
    public Event(String title2, String description2, LocalDateTime date2, String location2, AppUser orElseThrow,
            Integer maxGuests2) {
        //TODO Auto-generated constructor stub
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
    private LocalDateTime date;
    private String location;
    
    @ManyToOne
    private AppUser organizer;
    
    @ManyToMany
    private List<AppUser> participants;
    
    private Integer maxGuests;
}

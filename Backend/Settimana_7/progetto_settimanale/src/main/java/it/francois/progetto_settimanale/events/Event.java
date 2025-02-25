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

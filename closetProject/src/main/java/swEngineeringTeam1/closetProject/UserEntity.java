package swEngineeringTeam1.closetProject;

import lombok.Cleanup;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "User")
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userCode;

    private String id;
    private String password;
    @OneToMany(mappedBy = "user")
    private List<ClothesEntity> clotheses = new ArrayList<>();
}

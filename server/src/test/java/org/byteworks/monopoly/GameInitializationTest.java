package org.byteworks.monopoly;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public final class GameInitializationTest {
    @Test
    public void initializesGameWithNoPlayers() {
        final MonopolyGame game = new MonopolyGame();
        assertEquals(0, game.getNumberOfPlayers());
    }
}
